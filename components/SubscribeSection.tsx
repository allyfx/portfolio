import { useState, useEffect } from "react";

const SUBSCRIBED_KEY = "blog:subscribed"

export function SubscribeSection() {
  const [isSubOpen, setIsSubOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  async function subscribeToEmailList() {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        setResult(data.error || 'Failed to send email');
        return
      } else {
        localStorage.setItem(SUBSCRIBED_KEY, "true")
        setSubscribed(true)
      }

      setIsSubOpen(false)
    } catch(err) {
      setResult('Failed to send email');
    }
  }

  useEffect(() => {
    setSubscribed(JSON.parse(localStorage.getItem(SUBSCRIBED_KEY) ?? "false"))
  }, []);

  return (
    <>
      <button className="cursor-pointer mt-4" onClick={() => setIsSubOpen(!isSubOpen)}>
        {!subscribed ? (
          <>Hey! Want to get notified for new posts? <span className="underline">Subscribe</span></>
        ) : "Welcome to the subscription list! I'll email you when I post something new."}
      </button>

      {isSubOpen && (
        <section className="mt-2 border-b-2 pb-5">
          <div className="flex flex-row space-x-6">
            <input
              type="text"
              placeholder="Your first name"
              className="flex-1 border-2 border-amber-50 py-2 px-1 pl-4 rounded-md w-full"
              onChange={(e) => setName(e.currentTarget.value)}
              value={name}
            />

            <input
              type="email"
              placeholder="Your email"
              className="flex-2 border-2 border-amber-50 py-2 px-1 pl-4 rounded-md w-full"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
            />

            <button className="cursor-pointer hover:font-bold" onClick={subscribeToEmailList}>
              Subscribe
            </button>
          </div>

          {!!result && <p>{result}</p>}
        </section>
      )}
    </>
  )
}