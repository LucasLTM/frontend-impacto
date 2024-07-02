interface ContentProps{
    imgSrc: string
    imgAlt: string
    imgPosition?: "left" | "right"
    title: string
    content: string
}

export function Content({ content, imgAlt, imgPosition = "right", imgSrc, title }: ContentProps){
    return(
        <article className={`flex w-fit items-center mb-12 flex-col-reverse md:flex-row ${imgPosition === "left" && "gap-10 md:flex-row-reverse"}`}>
            <div className="w-full md:w-3/4 flex flex-col gap-4 mt-4 md:mt-0 items-center md:items-start">
                <h2 className="border-b-4 border-[#004AAD] w-fit text-2xl">{title}</h2>
                <p className={`${imgPosition === "right" && "w-full md:w-2/3"}`}>{content}</p>
            </div>

            <figure className="flex-1 grid place-items-center">
                <img src={imgSrc} alt={imgAlt}  className="w-80 object-cover rounded-2xl" />
            </figure>
        </article>
    )
}