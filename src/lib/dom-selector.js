/**
 * Obtiene el primer elemento que coincida con el selector proporcionado en el contexto especificado.
 * @example
 *  const elementClass = $('.element-class')
 *  const elementId = $('#element-id')
 * @param {string} selector
 * @param {Document|HTMLElement} [context=document]
 * @returns HTMLElement
 */

export const $ = (selector, context = document) =>
  context.querySelector(selector)

/**
 * Obtiene todos los elemento que coincidan con el selector proporcionado en el contexto especificado.
 * * @example
 * 	const elements = $$('.element-class')
 * @param {string} selector
 * @param {Document|HTMLElement} [context=document]
 * @returns HTMLElement
 */
export const $$ = (selector, context = document) =>
  context.querySelectorAll(selector)
