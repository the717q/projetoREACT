export default function Data(props) {
  return (
    <>
      <div className='data-info'>
        <p>
          Hello user, you have <strong>{props.length}</strong> articles to read.
        </p>
        <p>
          There are <strong>{props.sumofpositivereactions}</strong> positive
          reactions
        </p>
      </div>
    </>
  );
}
