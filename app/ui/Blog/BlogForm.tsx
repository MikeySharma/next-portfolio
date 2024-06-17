
const BlogForm = () => {
    return (
        <form method="post" className="comment-form">
            <p className="comment-form-author">
                <input
                    name="author"
                    type="text"
                    placeholder="Name*"
                    required
                />
            </p>
            <p className="comment-form-email">
                <input
                    name="email"
                    type="email"
                    placeholder="E-mail*"
                    required
                />
            </p>
            <p className="comment-form-url">
                <input
                    id="url"
                    name="url"
                    type="url"
                    placeholder="Website"
                />
            </p>
            <p className="comment-form-comment">
                <textarea
                    name="comment"
                    cols={40}
                    rows={5}
                    placeholder="Write here...*"
                    required
                    defaultValue={''}
                />
            </p>
            <p className="form-submit">
                <button
                    type="submit"
                    className="st-btn st-style1 st-color1 st-size-medium"
                >
                    Post Comment
                </button>
            </p>
        </form>
    )
}

export default BlogForm