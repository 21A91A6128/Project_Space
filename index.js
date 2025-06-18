const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to convert video file to base64
function convertVideoToBase64(filePath) {
    try {
        // Read the video file
        const videoData = fs.readFileSync(filePath);

        // Convert video data to base64
        const base64EncodedVideo = Buffer.from(videoData).toString('base64');

        return base64EncodedVideo;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Function to generate content
async function generateContent(base64Video, userInputText) {
    try {
        const { VertexAI } = require('@google-cloud/vertexai');

        // Initialize Vertex with your Cloud project and location
        const vertex_ai = new VertexAI({ project: 'strange-team-462510-i9', location: 'us-central1' });
        const model = 'gemini-2.5-flash';

        // Instantiate the models
        const generativeModel = vertex_ai.preview.getGenerativeModel({
            model: model,
            generation_config: {
                "max_output_tokens": 2048,
                "temperature": 0.4,
                "top_p": 1,
                "top_k": 32
            },
            safety_settings: [
                { "category": "HARM_CATEGORY_HATE_SPEECH", "threshold": "BLOCK_MEDIUM_AND_ABOVE" },
                { "category": "HARM_CATEGORY_DANGEROUS_CONTENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE" },
                { "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT", "threshold": "BLOCK_MEDIUM_AND_ABOVE" },
                { "category": "HARM_CATEGORY_HARASSMENT", "threshold": "BLOCK_MEDIUM_AND_ABOVE" }
            ],
        });

        const req = {
            contents: [{
                role: 'user',
                parts: [
                    { inline_data: { mime_type: 'video/mp4', data: base64Video } },
                    { text: userInputText }
                ]
            }],
        };

        const streamingResp = await generativeModel.generateContentStream(req);

        for await (const item of streamingResp.stream) {
            if (item.candidates) {
                item.candidates.forEach(candidate => {
                    candidate.content.parts.forEach(part => {
                        if (part.text) {
                            console.log('Generated text:', part.text);
                        }
                    });
                });
            }
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage
const filePath = "C:/Users/Vardhan/Downloads/Video Q&A/Video Q&A/Snapchat-1830037911.mp4"; // Update this with your video file path
const base64Video = convertVideoToBase64(filePath);

if (base64Video) {
    // Ask user for text input
    rl.question('Please enter some text: ', (userInputText) => {
        console.log('User input:', userInputText);
        rl.close();

        // Call generateContent function with video and text input
        generateContent(base64Video, userInputText);
    });
}
