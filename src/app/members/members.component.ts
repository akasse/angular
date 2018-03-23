import { Component, OnInit } from '@angular/core';

//service
import { MyDataService } from '../my-data.service';

//pdf
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

//chart
//import { NvD3Module } from 'angular2-nvd3';
//import * as d3 from 'd3';
declare const d3: any;

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  isTrue: boolean;
  myName: String;
  ser: string;
  title = 'app works!';

     dd = {content: [
    // if you don't need styles, you can use a simple string to define a paragraph
    'This is a standard paragraph, using default style',

    // using a { text: '...' } object lets you set styling properties
    { text: 'This paragraph will have a bigger font', fontSize: 15 },

    // if you set the value of text to an array instead of a string, you'll be able
    // to style any part individually
    {
      text: [
        'This paragraph is defined as an array of elements to make it possible to ',
        { text: 'restyle part of it and make it bigger ', fontSize: 15 },
        'than the rest.'
      ]
    }
  ]};

  //chart
    options: any;
    data: any;

  constructor(private service: MyDataService) {  }

  ngOnInit() {
    /**
    this.isTrue = true;
    this.myName = 'akasse';
    this.ser = this.service.sucess();
    console.log(this.service.sucess());
    console.log(this.service.obj);
    this.service.obj.prenom = 'Alioune';
    this.service.obj.nom = 'Kasse';
    console.log(this.service.obj);
    */

    //called first time before the ngOnInit()
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    //pdfMake.createPdf(this.dd).download('testak.pdf');
    //pdfMake.createPdf(this.dd).open();
    this.service.getData();

    this.options = {
    chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 55
        },
        x: function(d){ return d.label; },
        y: function(d){ return d.value; },
        showValues: true,
        valueFormat: function(d){
            return d3.format(',.4f')(d);
        },
        transitionDuration: 500,
        xAxis: {
            axisLabel: 'X Axis'
        },
        yAxis: {
            axisLabel: 'Y Axis',
            axisLabelDistance: 30
        }
    }
};

this.data = [{
    key: "Cumulative Return",
    values: [
        { "label" : "A" , "value" : -29.765957771107 },
        { "label" : "B" , "value" : 0 },
        { "label" : "C" , "value" : 32.807804682612 },
        { "label" : "D" , "value" : 196.45946739256 },
        { "label" : "E" , "value" : 0.19434030906893 },
        { "label" : "F" , "value" : -98.079782601442 },
        { "label" : "G" , "value" : -13.925743130903 },
        { "label" : "H" , "value" : -5.1387322875705 }
    ]
}];
  }
}
