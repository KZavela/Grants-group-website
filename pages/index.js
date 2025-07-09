
import { Calendar, FolderOpen, Users } from "lucide-react";

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Local Grants Professionals Group</h1>
      <p style={{ color: 'gray' }}>
        A regional network supporting grant professionals in local government.
      </p>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Mission Statement</h2>
        <p>
          Our mission is to foster collaboration, share knowledge, and support
          fellow grant professionals working in government agencies by promoting
          best practices and expanding access to funding opportunities.
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}><Calendar size={20} /> Next Meeting</h2>
        <p><strong>Date:</strong> August 1, 2025</p>
        <p><strong>Time/Location:</strong> TBD</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}><Users size={20} /> Member Directory</h2>
        <ul>
          <li>Kalee Zavela – Town of Longboat Key</li>
          <li>[Insert Member Name] – [Agency]</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}><FolderOpen size={20} /> Shared Resources</h2>
        <ul>
          <li><a href="#">Grant Calendar Template</a></li>
          <li><a href="#">Sample RFP Language</a></li>
          <li><a href="#">Funding Opportunities List</a></li>
          <li><a href="https://drive.google.com/drive/folders/1sAydxTGKs2aYkM6cDqjG9-KXzyl8pJ4K?usp=sharing" target="_blank">Upload Your Resources</a></li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Get Involved</h2>
        <form action="mailto:kshaberts@longboatkey.org" method="POST" encType="text/plain">
          <div><input name="name" placeholder="Your name" required /></div>
          <div><input name="email" type="email" placeholder="Your email" required /></div>
          <div><textarea name="message" placeholder="Your message" required /></div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
