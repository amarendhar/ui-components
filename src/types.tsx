export type ObjType = {
  [key: string]: string
}

export type CustomObjType<V> = {
  [key: string]: V
}

export type CreateClassName = {
  [key: string]: boolean
}

// ToDo: Change this real style-props type-checker
export type StyleObj = {
  [key: string]: string
}
