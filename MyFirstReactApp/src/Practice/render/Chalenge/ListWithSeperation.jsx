const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {

  let output = [];
  poem.lines.forEach((line,i) => {
    output.push(
      <hr key={i}/>
    )
    output.push(
      <p>{line}</p>
    )
  })
  output.unshift()
  return (
    <article>
      {output}
    </article>
  );
}
