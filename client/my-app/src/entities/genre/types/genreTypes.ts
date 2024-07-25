export type Genre = {
    id: number,
    title: string,
    img: string,
    Movies: Film[]
}

export type GenreId = Genre['id']