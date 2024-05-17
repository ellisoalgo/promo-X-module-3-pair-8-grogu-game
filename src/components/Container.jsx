import "../styles/Container.scss";

const Container = ({cookies, eggs, frogs}) => {

  const renderCookies = cookies.map((cookie, index) => <div className="goods-item" key={index}>{cookie}</div>)
  
  const renderEggs = eggs.map((egg, index) => <div className="goods-item" key={index}>{egg}</div>)
  
  const renderFrogs = frogs.map((frog, index) => <div className="goods-item" key={index}>{frog}</div>)

  return (
    <>
        <section className="goods-container">
          {renderCookies}
        </section>
        <section className="goods-container">
          {renderEggs}
        </section>
        <section className="goods-container">
          {renderFrogs}
    </section>
    </>
  )
}

export default Container