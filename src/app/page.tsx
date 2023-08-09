'use client';

import { Check, Clipboard } from '@/assets/Icons';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { useCompletion } from 'ai/react';
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isResponse, setIsResponse] = useState(false);
  const [name, setName] = useState('');
  const [context, setContext] = useState('');
  const [isCopied, setisCopied] = useState(false);
  const [mood, setMood] = useState('Friendly');
  const [type, setType] = useState('Professional');
  const [language, setlanguage] = useState('Norwegian');
  const [parent] = useAutoAnimate();
  const { completion, input, stop, isLoading, handleInputChange, handleSubmit, complete } = useCompletion({
    api: '/api/completion',
    body: {
      context,
      isResponse,
      name,
      language,
      mood,
      type,
    },
  });

  return (
    <main className="flex min-h-screen w-screen gap-20 justify-between p-24 bg-gray-950 text-gray-200">
      <div
        className={cn(
          completion ? 'opacity-50' : 'opacity-0',
          'pointer-events-none duration-200 fixed inset-0 z-0 h-full w-screen bg-[radial-gradient(circle_at_left,_#B12E82_10%,_transparent_70%)] ',
        )}
      />
      <Card className="w-full z-10  h-fit min-h-[40vh] p-4 max-w-xl bg-gray-800 text-slate-300">
        <CardHeader>
          <CardTitle>Email Generated:</CardTitle>
        </CardHeader>
        <CardContent ref={parent}>
          <output className=" whitespace-pre-line">
            {' '}
            {completion ? completion : <div className="text-sm text-slate-400"> email will be generated here </div>}
          </output>
        </CardContent>
        <CardFooter>
          {completion && (
            <div>
              <button
                ref={parent}
                className="bg-slate-950 hover:bg-slate-900 text-white font-bold h-10 w-10 flex justify-center items-center duration-150 rounded-full"
                onClick={() => {
                  navigator.clipboard.writeText(completion);
                  setisCopied(true);
                }}
              >
                {isCopied ? <Check className="w-4 h-4" /> : <Clipboard className="w-4 h-4" />}
              </button>
              {isCopied && <span className="text-xs text-slate-500">Copied to clipboard!</span>}
            </div>
          )}
        </CardFooter>
      </Card>
      <form
        onSubmit={handleSubmit}
        ref={parent}
        className="flex flex-col gap-4 max-w-3xl w-full relative right-0 p-6 bg-gray-800 rounded-lg"
      >
        <label className="flex flex-col w-fit">
          Make a Response?
          <Switch
            className="bg-blue-500"
            checked={isResponse}
            onClick={() => {
              setIsResponse(!isResponse);
            }}
          />
        </label>
        {isResponse && (
          <label>
            Email to send response to:
            <Textarea
              className="w-full border min-h-[200px] border-gray-300 text-gray-700 placeholder:text-gray-400 rounded shadow-xl p-2"
              value={input}
              placeholder="Enter your email you want to generate a response for..."
              onChange={handleInputChange}
            />
          </label>
        )}
        <label>
          Context of the {isResponse ? 'response' : 'email'}:
          <Textarea
            className="w-full border border-gray-300 text-gray-700 placeholder:text-gray-400 rounded shadow-xl p-2"
            value={isResponse ? context : input}
            placeholder="Enter the context of the response..."
            onChange={isResponse ? (e) => setContext(e.target.value) : handleInputChange}
          />
        </label>
        <label>
          Your Name:
          <input
            className="w-full border border-gray-300 text-gray-700 placeholder:text-gray-400 rounded shadow-xl p-2"
            value={name}
            placeholder="Enter your name..."
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Language:
          <Select value={language} onValueChange={(e) => setlanguage(e)}>
            <SelectTrigger className="w-fit min-w-[200px] text-gray-700">
              <SelectValue placeholder="Select Your Language..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Language</SelectLabel>
                <SelectItem value="Norwegian">Norwegian</SelectItem>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="French">French</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </label>
        <label>
          Mood of Email:
          <Select value={mood} onValueChange={(e) => setMood(e)}>
            <SelectTrigger className="w-fit min-w-[200px] text-gray-700">
              <SelectValue placeholder="Select Email Mood..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Mood Type</SelectLabel>
                <SelectItem value="Friendly">Friendly</SelectItem>
                <SelectItem value="Formal">Formal</SelectItem>
                <SelectItem value="Direct">Direct</SelectItem>
                <SelectItem value="Angry">Angry</SelectItem>
                <SelectItem value="Sad">Sad</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </label>
        <label>
          Email Type:
          <Select value={type} onValueChange={(e) => setType(e)}>
            <SelectTrigger className="w-fit min-w-[200px] text-gray-700">
              <SelectValue placeholder="Select Email Type..." />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Personal">Personal</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </label>
        <button disabled={isLoading} type="submit" className="w-fit bg-slate-50 text-gray-800 py-2 px-4 rounded-md">
          Send
        </button>

        {isLoading && (
          <button type="button" onClick={stop} className="w-fit bg-slate-50 text-gray-800 py-2 px-4 rounded-md">
            Stop Generating
          </button>
        )}
      </form>
    </main>
  );
}
