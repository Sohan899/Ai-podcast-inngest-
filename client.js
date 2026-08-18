export const processVideo=inngest.createFunction(
    {id:process-video},
    {event:'video/upload'},
  async({event,step})=>{
        const transcript=await step.run('transcribe videos',async()=>deepDgram.transcribe(EventSource.data.videoUrl))
        const summariser=await step.run('summarise-transcript',async()=>llm.createCompletion({
        model:'gpt-4o',
        prompt:createSummaryPrompt(transcript)
    })
}
)

)