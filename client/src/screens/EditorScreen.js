import React from 'react';
import EditorJS from '@editorjs/editorjs';

function EditorScreen() {
    const editor = new EditorJS('editorjs');
    const saveBtn = () => {
        console.log('Inside the save Button');
        editor.save().then((outputData) => {
            console.log('Article data: ', outputData);
        }).catch((err) => {
            console.log('Error: ', err);
        });
    };
    return(
        <div>
            <h1>Hello World from EditorScreen</h1>
            <div>
                <div id="editorjs"></div>
            </div>
            <div>
                <button onClick={saveBtn}>Save Article</button>
            </div>
        </div>
    );
}

export default EditorScreen;
