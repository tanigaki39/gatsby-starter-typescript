import { GatsbyNode } from 'gatsby'
import { createAuthorPages } from './createAuthorPages'
// ______________________________________________________
//
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions: { createPage },
}) => Promise.all([await createAuthorPages({ graphql, createPage })])
