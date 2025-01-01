import type { AIMessage } from '../types'
import { openai } from './ai'

// export const llm = async (prompt: string) => {
//   const response = await openai.createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: [{ role: 'user', content: prompt }],
//   })
//   return response.data.choices[0].message.content
// }

export const runLLM = async ({ messages }: { messages: AIMessage[] }) => {
  const response = await openai.chat.completions.create({
    // model: 'gpt-4o-mini',
    model: 'grok-2-latest',
    temperature: 0.1,
    messages,
  })

  return response.choices[0].message.content
}
