export const readFile = (path: string): Promise<string> => {
  return window.electron.ipcRenderer.invoke('fs:readFile', path)
}