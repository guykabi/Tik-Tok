import {defineConfig} from 'sanity' 
import {deskTool} from 'sanity/desk'
import schemas from './sanity/schemas'

export const config = defineConfig({ 
    projectId: '4mg84dtz',
    dataset: 'production',
    title: 'Tik-Tok',
    apiversion: '27-05-2023',
    basePath: '/admin',
    plugins : [deskTool()],
    schema:{types:schemas}
})

