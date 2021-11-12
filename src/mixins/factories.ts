import { ClassMixin } from './classMixin'

export const SubclassFactory = (behaviour: any) => (superclass: any) =>
  ClassMixin(behaviour)(class extends superclass {})

export const FactoryFactory =
  (c: any) =>
  (...args: any[]) =>
    new c(...args)
