import Editor from "@/components/editor";

export default function CreatePage() {
  const post  = {
    id: 0,
    title: "Untitled",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat doloribus molestias quam saepe necessitatibus modi impedit. Alias nam sint quis, aperiam nihil illum saepe repudiandae velit sapiente tempora nemo quos."
  }
  
  return (
      <Editor post={post}/>
  )
}
