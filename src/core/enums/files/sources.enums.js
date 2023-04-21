import { textUtils } from '../../../utils';

const SourceNameEnum = textUtils.createEnum([
  ['POP1', 'pop1'],
  ['POP2', 'pop2'],
  ['CAC', 'cac'],
  ['CLN', 'cln'],
  ['COA', 'coa'],
  ['CVA', 'cva'],
  ['CVS', 'cvs'],
  ['GOO', 'goo'],
  ['WIK', 'wik'],
  ['WOD', 'wod'],
]);

const SourceNumberTypeEnum = textUtils.createEnum([
  ['CASE', 'case'],
  ['DEATH', 'death'],
  ['RECOVER', 'recover'],
  ['UPDATE', 'update'],
  ['LAST_UPDATE', 'last_update'],
]);

const SourceUpdateTypeEnum = textUtils.createEnum([
  ['ADD', '+'],
  ['SUB', '-'],
]);

export { SourceNameEnum, SourceNumberTypeEnum, SourceUpdateTypeEnum };
