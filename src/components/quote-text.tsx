interface Props {
  text: string
}

export function QuoteText ({ text }: Props) {
  return (
    <>
      <div className="border-l-4 border-l-lime-300 pl-5 sm:pl-32 box-border max-w-[40ch] sm:max-w-lg">
        <p>&#34;{text}&#34;</p>
      </div>
    </>
  )
}
