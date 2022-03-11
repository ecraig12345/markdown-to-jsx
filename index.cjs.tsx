import Markdown, { compiler } from './'
// The types declare a default export, so ensure that's set even in cjs
Object.assign(Markdown, { compiler, default: Markdown })
export default Markdown as typeof Markdown & { compiler: typeof compiler } & {
  default: typeof Markdown
}
