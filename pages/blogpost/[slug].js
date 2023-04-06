import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
  const router = useRouter();
  const {slug} = router.query;
  return (
		<>
    <h1 style={{fontSize: 'xx-large', font: 'bolder'}}>{slug}</h1>
		<hr></hr>
		<p styles={{fontSize: 'x-large'}}>ojndjkdklkkmjmklld;pldllldldldl &rarr;</p>
		</>
  )
}

export default slug;