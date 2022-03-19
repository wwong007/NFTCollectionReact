
export function handleSearchData<T extends { [key: string]: any }>(
  data: T[],
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
  setHook: React.Dispatch<React.SetStateAction<T[]>>
  ): void {
  const { value } = event.currentTarget;
  const filtered = data.filter(item => {
    return (
      item.name.toLowerCase().includes(value.toLowerCase()) ||
      item.id.toLowerCase().includes(value.toLowerCase())
    )
  })
  setHook(filtered)
}