import { FormEvent, useState } from "react"
import { squeeze } from "../api/shorterService";

const Shorter = () => {
  const [url, setUrl] = useState('');
  
  const hundelSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await squeeze(url);
    res && setUrl(`https://front-test.hex.team/s/${res.short}`);
  }
  
  return (
    <form onSubmit={hundelSubmit} className="shorter">
      <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="enter url"/>
      <button disabled={!url} className="">Create short URL</button>
    </form>
  )
}

export default Shorter
