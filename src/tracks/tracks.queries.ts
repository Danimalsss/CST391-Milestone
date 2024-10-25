export const trackQueries ={
    createTrack: `
    INSERT INTO tracks (album_id, title, number, video) VALUES(?,?,?,?)
    `,
    readTracks: `
    SELECT title AS title, video AS video, lyrics AS lyrics
    FROM music.tracks
    WHERE album_id = ?
    `,
    updateTrack: `
    UPDATE music.tracks
    SET title = ?, number = ?, video = ?, lyrics = ?
    WHERE id = ?;
    `,
}