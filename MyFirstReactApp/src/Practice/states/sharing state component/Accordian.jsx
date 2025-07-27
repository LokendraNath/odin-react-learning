import { useState } from "react";

export default function Accordion() {

  // const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        20 लाख की आबादी के साथ, अलमाती कज़ख़िस्तान का सबसे बड़ा शहर है। 1929 से
        1997 तक, वह उसकी राजधानी थी।
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        यह नाम <span lang="kk-KZ">алма</span> से आता है, जो "सेब" का कज़ाख शब्द
        है और अक्सर "सेब से भरपूर" में अनुवाद करता है। असल में, अलमाती के आस पास
        के क्षेत्र को सेब का पैतृक घर माना जाता है, और जंगली{" "}
        <i lang="la">Malus sieversii</i> को सेब के पूर्वज होने का संभावित
        उम्मीदवार माना जाता है।
      </Panel>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {

  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
  
}
