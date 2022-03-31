
export function handleInputChange<T>(
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setHook: React.Dispatch<React.SetStateAction<T>>
  ): void {
  const { name, value } = event.currentTarget;
  setHook((prevState) => ({
    ...prevState,
    [name]: value
  }))
}