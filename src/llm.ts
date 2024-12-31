import { openai } from './ai'

// export const llm = async (prompt: string) => {
//   const response = await openai.createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: prompt }],
//   })
//   return response.data.choices[0].message.content
// }

export const runLLM = async ({ userMessage }: { userMessage: string }) => {
  const response = await openai.chat.completions.create({
    // model: 'gpt-4o-mini',
    // model: 'gpt-3.5-turbo',
    model: 'grok-2-latest',
    temperature: 0.1,
    messages: [{ role: 'user', content: userMessage }],
  })

  return response.choices[0].message.content
}
