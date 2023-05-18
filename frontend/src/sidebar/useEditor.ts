import {StarterKit} from "@tiptap/starter-kit";
import {useEditor as useTipTapEditor} from "@tiptap/react";

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Text from '@tiptap/extension-text'
// @ts-ignore
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import {CollaborationCursor} from "@tiptap/extension-collaboration-cursor";
import Collaboration from '@tiptap/extension-collaboration'
import Heading from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'

import {WebrtcProvider} from 'y-webrtc'
import * as Y from 'yjs'

import {lowlight} from 'lowlight'

import './code.scss'
import './collaborative.scss'
import './table.scss'


const ydoc = new Y.Doc()
const provider = new WebrtcProvider('tiptap-collaboration-extension', ydoc)
console.log(provider)


export const useEditor = (content: string) => {
    const editor = useTipTapEditor({
        extensions: [
            StarterKit,
            Document,
            Paragraph,
            Text,
            // https://tiptap.dev/api/nodes/task-list
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            CodeBlockLowlight.configure({
                lowlight,
            }),
            // https://tiptap.dev/api/extensions/collaboration
            Collaboration.configure({
                document: ydoc,
            }),
            // https://tiptap.dev/api/extensions/collaboration-cursor
            CollaborationCursor.configure({
                provider,
                user: {
                    name: 'Cyndi Lauper',
                    color: '#f783ac',
                },
            }),
            Heading.configure({
                levels: [1, 2, 3, 4, 5, 6],
            }),
            Link.configure({
                openOnClick: false,
            }),
            // https://tiptap.dev/api/nodes/table
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: `<p>
          I like lists. Let’s add one:
        </p>
        <ul>
          <li>This is a bullet list.</li>
          <li>And it has three list items.</li>
          <li>Here is the third one.</li>
        </ul>
        <p>
          Do you want to see one more? I bet! Here is another one:
        </p>
        <ol>
          <li>That’s a different list, actually it’s an ordered list.</li>
          <li>It also has three list items.</li>
          <li>And all of them are numbered.</li>
        </ol>
        <p>
          Lists would be nothing without list items.
        </p><table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>singer</td>
              <td>songwriter</td>
              <td>actress</td>
            </tr>
          </tbody>
        </table>
      `,
    })

    // const websocketProvider = new TiptapCollabProvider({
    //     appId: '7j9y6m10',
    //     name: room,
    //     document: ydoc,
    // })
    //https://tiptap.dev/examples/collaborative-editing
    //https://tiptap.dev/extensions

    return editor
}