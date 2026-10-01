import ClipboardCopy from './clipboard-copy'

/**
 * A code block. doc-kit renders every fenced code block with this component,
 * highlighted at build time; `children` is the `<code>` element. The props
 * it passes along from the highlighted `<pre>` are left out: the inline
 * theme colors, and the focusability it sets itself.
 *
 * @param {{ className?: string, children: import('preact').ComponentChildren }} props
 */
const CodeBox = ({className, style, tabIndex, tabindex, ...props}) => (
  <div className="code-block" data-code-block>
    <div className="code-block-frame">
      <ClipboardCopy />
      <div className="code-block-scroll">
        <pre className={className} tabIndex={0} {...props} />
      </div>
    </div>
  </div>
)

export default CodeBox
