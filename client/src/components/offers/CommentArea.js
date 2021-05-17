import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../actions/user.actions';

const CommentArea = () => {
    const [comment, setComment] = useState("");
    const [updateForm, setUpdateForm] = useState(false);
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(updateComment(userData._id, comment));
        setUpdateForm(false);
    };

    return (
        <div className="comment-area">
            <h3>Note</h3>
            {updateForm === false && (
                <>
                    <p onClick={() => setUpdateForm(!updateForm)}>{userData.comment}</p>
                    <button onClick={() => setUpdateForm(!updateForm)}>
                        Modifier
                </button>
                </>
            )}
            {updateForm && (
                <>
                    <textarea
                        type="text"
                        defaultValue={userData.comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                    <button onClick={handleUpdate}>Valider</button>
                </>
            )}
        </div>
    );
};

export default CommentArea;