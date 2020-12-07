import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Difference

Assume that we have a string of \`This is a sample text in a paragraph\` displayed in a container that has limited width such as it 
can display 9 characters at maximum.

\`word-break: break-all\` will try to fit maximum characters in each line as it can. So there are words which are split into different lines 
such as _text_ and _paragraph_ like that:

~~~
/* word-break: break-all */
┌───────────┐
| This is a |
| sample tex|
| t in a par|
| agraph.   |
└───────────┘
~~~

On the other hand, \`word-wrap: break-word\` does not break the words that are able to fit in each line. So the _text_ and  _paragraph_ words 
are not split in different lines.

~~~
/* word-wrap: break-word */
┌───────────┐
| This is a |
| sample    |
| text in a |
| paragraph.|
└───────────┘
~~~

If each line can contains a less number of characters, then \`break-word\` will break long words that are not fit in each line.

~~~
/* word-wrap: break-word */
┌─────────┐
| This is |
| a       |
| sample  |
| text in |
| a       |
| paragrap|
| h.      | 
└─────────┘
~~~

## Good to know

1. \`word-wrap\` was a non standard and unprefixed Microsoft extension. It was renamed to \`overflow-wrap\`.

    However, \`word-wrap: break-word\` is identical to \`overflow-wrap: anywhere\`, not \`overflow-wrap: break-word\`. 

2. A browser might break a long text at unexpected places. For example, the specific path (\`/this/is/.../folder\`) in the following text 
    is placed at the second line:

    ~~~
    ┌───────────────────────────────────────────────────────┐
    | Copy file to the folder:                              |
    | /this/is/a/very/long/path/to/the/destination/folder   |
    └───────────────────────────────────────────────────────┘
    ~~~

    To prevent this behavior, HTML5 provides the \`<wbr>\` element. It stands for _Word Break Opportunity_, and is used to specify the 
    positions that a line break would be created.

    Getting back to the example above. If we use \`<wbr>\` elements right before each path separator (\`/\`) as follows:

    ~~~ html
    Copy your file to the folder:
    <wbr>/this
    <wbr>/is
    <wbr>/a
    ...
    <wbr>/destination
    <wbr>/folder
    ~~~

    The browser will break the paths in between the directory names:

    ~~~
    ┌───────────────────────────────────────────────────────┐
    | Copy your file to the folder: /this/is/a/very/long    |
    | /path/to/the/destination/folder                       |
    └───────────────────────────────────────────────────────┘
    ~~~

    Note that \`<wbr>\` element is [not supported](https://caniuse.com/wbr-element) in IE 11 and earlier versions.
`}
/>
    );
};
