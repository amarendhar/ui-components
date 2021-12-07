import { css } from 'styled-components'
import get from 'lodash/get'
import { CreateClassName, StyleObj } from 'types'
import { mediaQuery } from 'themes/defaultTheme'

// ToDo: remove type any
export const typeOf = (value: any, type: string): boolean =>
  Object.prototype.toString.call(value).toLowerCase().includes(type)
export const isNull = (value: any): boolean => typeOf(value, 'null')
export const isUndefined = (value: any): boolean => typeOf(value, 'undefined')
export const isNumber = (value: any): boolean => typeOf(value, 'number')
export const isString = (value: any): boolean => typeOf(value, 'string')
export const isArray = (value: any): boolean => typeOf(value, 'array')
export const isObject = (value: any): boolean => typeOf(value, 'object object')

export const getMediaQuery = (query: string) =>
  // @ts-ignore
  mediaQuery[query].replace('@media', '')

export const createClassName = (
  arg1: CreateClassName | string,
  arg2?: CreateClassName
): string => {
  let className: CreateClassName | string = ''

  if (arg2 && isString(arg1) && isObject(arg2)) {
    className = arg1
    // Note: Do not use Object.entries with for-loop, which is expensive operation
    Object.keys(arg2).forEach((name) => {
      className += get(arg2, name) ? ` ${name}` : ''
    })
  } else if (isObject(arg1)) {
    Object.keys(arg1).forEach((name) => {
      className += get(arg1, name) ? ` ${name}` : ''
    })
  }

  return String(className)
}

export const getFadeInTransition = (
  classnames: string,
  timeout: number,
  style: StyleObj
) => {
  const displayBlockCSS = style.display ? 'display: block;' : ''

  return css`
    ${style}

    &.${classnames}-enter {
      ${displayBlockCSS}
      opacity: 0;
    }
    &.${classnames}-enter-active {
      ${displayBlockCSS}
      transition: opacity ${timeout}ms ease-in;
      opacity: 1;
    }
    &.${classnames}-enter-done {
      ${displayBlockCSS}
      opacity: 1;
    }

    &.${classnames}-exit {
      ${displayBlockCSS}
      opacity: 1;
    }
    &.${classnames}-exit-active {
      ${displayBlockCSS}
      opacity: 0;
      transition: opacity ${timeout}ms ease-in;
    }
  `
}
