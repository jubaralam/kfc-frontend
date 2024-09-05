import React, { useState } from 'react'

const HeroSection = () => {
    const [banner, setBanner] = useState("https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=1600&fit=fill&fm=webp")
  return (
    <div>
<img src={banner} alt="Banner" />


    </div>
  )
}

export default HeroSection