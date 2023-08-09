import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(config);

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { prompt, context, isResponse, name, language, mood, type } = await req.json();

  const ResponsePrompt = `Write a response to the following email. Please ensure that the response is written in the same language as provided here: ${language}, unless otherwise specified. The tone of the response should be ${mood}. This is a(n) ${type} email. Your name is ${name}. If necessary, please use the following additional context to inform your response: ${context} Email provided: '${prompt}'. format it like an email.`;
  const NewEmailPromt = `Genrate an email. Please ensure that the email is written in the same language as provided here: ${language}, unless otherwise specified. The tone of the email should be ${mood}. This is a(n) ${type} email. Write the emial in the name of: ${name}. If necessary, please use the following additional context to inform your email: ${prompt}'. format it like an email.`;
  // Ask OpenAI for a streaming completion given the prompt
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    stream: true,
    max_tokens: 300,
    temperature: 1,
    prompt: isResponse ? ResponsePrompt : NewEmailPromt,
  });

  // Check for errors
  if (!response.ok) {
    return new Response(await response.text(), {
      status: response.status,
    });
  }

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);

  // Respond with the stream
  return new StreamingTextResponse(stream);
}
