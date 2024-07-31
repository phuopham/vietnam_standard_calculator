/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const VietnamstandardcalculatorIndexLazyImport = createFileRoute(
  '/vietnam_standard_calculator/',
)()
const VietnamstandardcalculatorQnaLazyImport = createFileRoute(
  '/vietnam_standard_calculator/qna',
)()
const VietnamstandardcalculatorDataLazyImport = createFileRoute(
  '/vietnam_standard_calculator/data',
)()

// Create/Update Routes

const VietnamstandardcalculatorIndexLazyRoute =
  VietnamstandardcalculatorIndexLazyImport.update({
    path: '/vietnam_standard_calculator/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/vietnam_standard_calculator/index.lazy').then(
      (d) => d.Route,
    ),
  )

const VietnamstandardcalculatorQnaLazyRoute =
  VietnamstandardcalculatorQnaLazyImport.update({
    path: '/vietnam_standard_calculator/qna',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/vietnam_standard_calculator/qna.lazy').then(
      (d) => d.Route,
    ),
  )

const VietnamstandardcalculatorDataLazyRoute =
  VietnamstandardcalculatorDataLazyImport.update({
    path: '/vietnam_standard_calculator/data',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/vietnam_standard_calculator/data.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/vietnam_standard_calculator/data': {
      id: '/vietnam_standard_calculator/data'
      path: '/vietnam_standard_calculator/data'
      fullPath: '/vietnam_standard_calculator/data'
      preLoaderRoute: typeof VietnamstandardcalculatorDataLazyImport
      parentRoute: typeof rootRoute
    }
    '/vietnam_standard_calculator/qna': {
      id: '/vietnam_standard_calculator/qna'
      path: '/vietnam_standard_calculator/qna'
      fullPath: '/vietnam_standard_calculator/qna'
      preLoaderRoute: typeof VietnamstandardcalculatorQnaLazyImport
      parentRoute: typeof rootRoute
    }
    '/vietnam_standard_calculator/': {
      id: '/vietnam_standard_calculator/'
      path: '/vietnam_standard_calculator'
      fullPath: '/vietnam_standard_calculator'
      preLoaderRoute: typeof VietnamstandardcalculatorIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  VietnamstandardcalculatorDataLazyRoute,
  VietnamstandardcalculatorQnaLazyRoute,
  VietnamstandardcalculatorIndexLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/vietnam_standard_calculator/data",
        "/vietnam_standard_calculator/qna",
        "/vietnam_standard_calculator/"
      ]
    },
    "/vietnam_standard_calculator/data": {
      "filePath": "vietnam_standard_calculator/data.lazy.tsx"
    },
    "/vietnam_standard_calculator/qna": {
      "filePath": "vietnam_standard_calculator/qna.lazy.tsx"
    },
    "/vietnam_standard_calculator/": {
      "filePath": "vietnam_standard_calculator/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
