// import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="border-2 border-red-700">
      {children}
    </div>
  );
}
function Avatar({theme,shootIn}){
  return (
    <>
      <h1>Theme : {theme}</h1>
      <h3>Shoot In : {shootIn}</h3>
    </>
  )
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        theme="blue" shootIn="another Planet"
      />
    </Card>
  );
}

//============= Challenge 1 of 3: Extract a component