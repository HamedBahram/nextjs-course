async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    next: { revalidate: 10 }
  })

  if (!res.ok) throw new Error('Failed to fetch todos.')

  return res.json()
}

const Page = async () => {
  const todos = await getTodos()

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Todos</h1>
        <ul className='mt-6 flex flex-col gap-3'>
          {todos.slice(0, 10).map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
