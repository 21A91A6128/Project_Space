# Video Q&A

This is a simple web application designed to enhance video interaction and comprehension. Users can upload a video and pose queries related to its content. Leveraging **Google Vertex AI**, the application efficiently analyzes the video and provides concise summaries and relevant results to the user’s query. This project aims to streamline information retrieval from videos, enabling users to extract valuable insights and enhance their understanding of video content effortlessly.

## Features

- **Video Upload**: Allows users to upload video files (e.g., MP4 format).
- **Query Input**: Users can input a query related to the content of the uploaded video.
- **Video Analysis**: The application leverages Google Vertex AI to analyze the video and answer user queries.
- **AI-Powered Summarization**: Based on the video and the user’s query, concise and relevant summaries or answers are generated.

## Prerequisites

Before running the application, ensure you have the following prerequisites:

- **Node.js**: Version 14 or above
- **Google Cloud Project**: A Google Cloud project with Vertex AI enabled.
- **Google Cloud SDK**: Install and configure the Google Cloud SDK for authentication.
- **Google Cloud Credentials**: Ensure you have the proper credentials for using the Google Cloud API. Set the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to point to your service account key file.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/21A91A6128/Project_Space.git
    cd Project_Space
    ```

2. **Install dependencies**:

    Run the following command to install necessary dependencies:

    ```bash
    npm install
    ```

3. **Set up Google Cloud credentials**:

    Make sure you authenticate with Google Cloud by setting the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to point to your service account key:

    ```bash
    export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your-service-account-key.json"
    ```

    Replace `/path/to/your-service-account-key.json` with the actual path to your service account key JSON file.

4. **Install the `@google-cloud/vertexai` SDK**:

    Ensure that the `@google-cloud/vertexai` library is installed. It should be installed via `npm install`, but if you encounter issues, you can manually install it with:

    ```bash
    npm install @google-cloud/vertexai
    ```

## Usage

### Step 1: Upload a video

The web application allows users to upload a video file in `.mp4` format. You can upload the video you want to analyze. For example, the video `Snapchat-1830037911.mp4` is already present in your project directory:

### Step 2: Pose a query

Once the video is uploaded, users can input a query related to the video’s content. For example, users can ask:

- "What is the summary of this video?"
- "Can you explain the main points?"
- "What happened in the first part of the video?"

### Step 3: Receive AI-generated responses

The uploaded video is converted into a base64-encoded string, which is sent to Google Cloud Vertex AI along with the user’s query. Vertex AI will analyze the video and return a relevant response or summary.

### Step 4: View the results

The application will display the AI-generated summary or response directly on the web interface. This will allow the user to easily gain insights from the video.

---
