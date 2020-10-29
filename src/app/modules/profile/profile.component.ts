import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Group1',
    children: [
      {
        name: 'APP1-1',
        children: [{
          name: 'ReleaseV1'
        }, {
          name: 'ReleaseV2'
        }]
      },
      {
        name: 'APP1-2',
        children: [{
          name: 'ReleaseV1'
        }, {
          name: 'ReleaseV2'
        }]
      }
    ]
  },
  {
    name: 'Group2',
    children: [
      {
        name: 'APP2-1',
        children: [{
          name: 'ReleaseV1'
        }, {
          name: 'ReleaseV2'
        }]
      },
      {
        name: 'APP2-2',
        children: [{
          name: 'ReleaseV1'
        }, {
          name: 'ReleaseV2'
        }]
      }
    ]
  }
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  goLeaf(name): void {
    console.log('go leaf ' + name);
  }
}
