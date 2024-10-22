function Article({item}) {
    return(
        <section>
            <h2>{item.title}</h2>
            <div>
                <p>{item.body}</p>
            </div>
        </section>
    );
}

export default Article;