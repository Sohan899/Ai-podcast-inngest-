Overview
Hi 🤙 In this project, you'll build a SaaS application that converts full podcasts into viral short-form clips ready for YouTube Shorts or TikTok. The tool uses different AI models to transcribe the video, automatically detect the most engaging moments in podcasts and create clips cropped to the active speaker's face.  complete production-ready SaaS with user authentication, a credit-based payment system using Stripe, and background processing queues to handle user load. All services used in this project are free, so you won't have to pay anything to follow along. We'll use technologies such as Next.js 15, React, Typescript, Tailwind CSS, ShadCN, Auth.js, Python, FastAPI, Stripe, Modal, Inngest, S3 on AWS, and more

Features:

🎬 Auto-detection of viral moments in podcasts (stories, questions, etc.)
🔊 Automatically added subtitles on clips
📝 Transcription with m-bain/whisperX
🎯 Active speaker detection for video cropping with Junhua-Liao/LR-ASD
📱 Clips optimized for vertical platforms (TikTok, YouTube Shorts)
🎞️ GPU-accelerated video rendering with FFMPEGCV
🧠 LLM-powered viral moment identification with Gemini 2.5 Pro
📊 Queue system with Inngest for handling user load
💳 Credit-based system
💰 Stripe integration for credit pack purchases
👤 User authentication system
📱 Responsive Next.js web interface
🎛️ Dashboard to upload podcasts and see clips
⏱️ Inngest for handling long-running processes
⚡ Serverless GPU processing with Modal
🌐 FastAPI endpoint for podcast processing
🎨 Modern UI with Tailwind CSS & Shadcn UI
Setup
Follow these steps to install and set up the project.

Clone the Repository
git clone --recurse-submodules https://github.com/Andreaswt/ai-podcast-clipper-saas.git
Install Python
Download and install Python if not already installed. Use the link below for guidance on installation: Python Download

Create a virtual environment with Python 3.12.

Backend
Navigate to backend folder:

cd ai-podcast-clipper-backend
Install dependencies:

pip install -r requirements.txt
Clone the LR-ASD repo into the backend folder, and rename the folder asd:

git clone https://github.com/Junhua-Liao/LR-ASD.git
Modal setup:

modal setup
Run on Modal:

modal run main.py
Deploy backend:

modal deploy main.py
Frontend
Install dependencies:

cd ai-podcast-clipper-frontend
npm i
Run:

npm run dev
Queue
Run the local queue development server with Inngest:

cd ai-podcast-clipper-frontend
npm run inngest-dev
AWS Setup
CORS policy for S3 bucket:

[
    {
        "AllowedHeaders": [
            "Content-Type",
            "Content-Length",
            "Authorization"
        ],
        "AllowedMethods": [
            "PUT"
        ],
        "AllowedOrigins": [
            "*"
        ],
        "ExposeHeaders": [
            "ETag"
        ],
        "MaxAgeSeconds": 3600
    }
]
IAM user policy to upload, download and list bucket items:

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:ListBucket"
            ],
            "Resource": "[S3 ARN here]"
        },
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "[S3 ARN here]/*"
        }
    ]
}
LLM for viral moment identification
Create an API key for Gemini

Videos used for testing / thumbnail
MI6 Secret Agent Talks About the World's Darkest Secrets

Janney Sanchez | Therapy saved my life, From Rivera to 

## A Basic required idea about how i am clippin gthe viddeo tracks
# 1. Mock tracking data for two detected faces across 3 video frames
tracks = [
    {"track": {"frame": [0, 1, 2]}, "person": "Host"},    # Track 0
    {"track": {"frame": [0, 1, 2]}, "person": "Guest"},   # Track 1
]

# 2. Parallel array of speaking-confidence scores for each track per frame
scores = [
    [0.85, 0.92, 0.88],  # Scores for Track 0 (Host is speaking)
    [0.10, 0.05, 0.12],  # Scores for Track 1 (Guest is silent)
]

# 3. Loop using enumerate to process each track alongside its matching score array
for tidx, track in enumerate(tracks):
    score_array = scores[tidx]  # Fetch matching scores: scores[0] for Track 0, scores[1] for Track 1
    person_label = track["person"]
    
    print(f"Processing Track {tidx} ({person_label}):")

    # Loop through each frame in the current track
    for fidx, frame in enumerate(track["track"]["frame"]):
        frame_score = score_array[fidx]
        print(f"  Frame {frame}: Active Speaker Score = {frame_score}")
















