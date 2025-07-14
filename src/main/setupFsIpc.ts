import { ipcMain } from 'electron'
import { promises as fs } from 'fs'

export const setupFsIpc = (): void => {
  ipcMain.handle('fs:readFile', (_, path) => {
    return fs.readFile(path, 'utf8')
  })
}
