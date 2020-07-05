import React, { Component } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Checklist from '@editorjs/checklist';
import CodeTool from '@editorjs/code';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import InlineCode from '@editorjs/inline-code';
import List from '@editorjs/list'; // list not working
import Marker from '@editorjs/marker';
import Paragraph from '@editorjs/paragraph';
import Quote from '@editorjs/quote';
import RawTool from '@editorjs/raw';
import SimpleImage from '@editorjs/simple-image';
import Table from '@editorjs/table';
import Warning from '@editorjs/warning';
import { ArticleData } from './data';
// import Link from '@editorjs/link';
// import ImageTool from '@editorjs/image';

class ArticlePage extends Component {
    constructor(props) {
        super(props);
        this.EditorJS = new EditorJS({
            holder: "editorjs",
            onReady() {
                let editable_elements = document.querySelectorAll("[contenteditable=true]");
                editable_elements.forEach(el => el.removeAttribute("contenteditable"))

                let icon_settings = document.querySelectorAll('.ce-toolbar__settings-btn');
                icon_settings.forEach(el => el.remove())
            },
            tools: {
                header: {
                    class: Header,
                    config: {
                        placeholder: 'Enter a Header',
                        levels: [1,2,3,4,5,6],
                        defaultLevel: 2
                    }
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true
                },
                code: {
                    class: CodeTool,
                },
                delimiter: Delimiter,
                embed: {
                    class: Embed,
                    inlineToolbar: true,
                    config: {
                        services: {
                            youtube: true,
                            coub: true,
                            codepen: {
                                regex: /https?:\/\/codepen.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,
                                embedUrl: 'https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2',
                                html: "<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",
                                height: 300,
                                width: 600,
                                id: (groups) => groups.join('/embed/')
                            }
                        }
                    }
                },
                inlineCode: {
                    class: InlineCode
                },
                list: {
                    class: List,
                    inlineToolbar: true,
                },
                Marker: {
                    class: Marker,
                },
                paragraph: {
                    class: Paragraph,
                    inlineToolbar: true,
                    config: {
                        placeholder: 'Start writing here...',
                    }
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    config: {
                        quotePlaceholder: 'Enter a quote',
                        captionPlaceholder: 'Quote\'s author',
                    }
                },
                raw: RawTool,
                image: SimpleImage,
                table: {
                    class: Table,
                    inlineToolbar: true,
                    config: {
                        rows: 2,
                        cols: 3,
                    },
                },
                warning: {
                    class: Warning,
                    inlineToolbar: true,
                    config: {
                        titlePlaceholder: 'Title',
                        messagePlaceholder: 'Message',
                    }
                }
            },
            data: ArticleData,
        });
    }
    render() {
        return (
            <div className="editor-screen">
                <div>
                    <div id="editorjs"></div>
                </div>
            </div>
        );
    }
}

export default ArticlePage;