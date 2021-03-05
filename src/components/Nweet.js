import { useState } from "react";
import { dbService, storageService } from "fbase";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
      if (nweetObj.attachmentURL) {
        await storageService.refFromURL(nweetObj.attachmentURL).delete();
      }
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  return (
    <div>
      {editing ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={newNweet}
            placeholder="Edit your nweet"
            onChange={onChange}
            required
          />
          <input type="submit" value="Update Nweet" />
          <button onClick={toggleEditing}>Cancel</button>
        </form>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {nweetObj.attachmentURL && (
            <img
              src={nweetObj.attachmentURL}
              width="50px"
              height="50px"
              alt="nweet_image"
            />
          )}
          {isOwner && (
            <>
              <button onClick={toggleEditing}>Edit Nweet</button>
              <button onClick={onDeleteClick}>Delete Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
