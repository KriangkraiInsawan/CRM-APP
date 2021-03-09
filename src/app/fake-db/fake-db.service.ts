import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LayoutsFakeDb } from './layouts';
import { CompaniesFakeDb } from './companies';
import { UsersFakeDb } from './users';
import { ContactsFakeDb } from './contacts';
import { DealsFakeDb } from './deals';
import { CustomersFakeDb } from './customers';
import { NotesFakeDb } from './note';
import { FmMk06FakeDb } from './fm-mk-06';
import { FmMk13FakeDb } from './fm-mk-13';
import { FmMk11FakeDb } from './fm-mk-11';
import { POFakeDb } from './po';
import { ContactActivitiesFackDb } from './contact-activities';
import { ContactDealsFackDb } from './contact-deals';
import { ContactNotesFackDb } from './contact-notes';
import { ActivitiesFakeDb } from './activities';
import { ScrumboardFakeDb } from 'src/app/fake-db/scrumboard';

@Injectable({
  providedIn: 'root'
})
export class FakeDbService implements InMemoryDbService {
  userSales = [];

  createDb(): any {
    return {
      // Layouts
      'layouts': LayoutsFakeDb.layouts,

      // Settings
      'companies': CompaniesFakeDb.companies,
      'users': UsersFakeDb.users,


      'activities': ActivitiesFakeDb.activities,

      'contacts': ContactsFakeDb.contacts,
      'contactactivities': ContactActivitiesFackDb.contactActivities,
      'contactdeals': ContactDealsFackDb.contactdeals,
      'contactnotes': ContactNotesFackDb.contactnotes,
      'deals': DealsFakeDb.deals,

      'fm-mk-06': FmMk06FakeDb.sampleorders,
      'fm-mk-13': FmMk13FakeDb.sampleslips,
      'fm-mk-11': FmMk11FakeDb.quotations,
      'po': POFakeDb.salesorders,
      'scrumboard': ScrumboardFakeDb.boards,


      'customers': CustomersFakeDb.customers,
      'notes': NotesFakeDb.notes,

      // List Of Value (LOV)
      'lov-companies': CompaniesFakeDb.companies
        .map((data: any) => {
          data.key = data.companyCode;
          data.value = data.companyName;
          return data;
        }),
      'lov-users-sale': UsersFakeDb.users
        .map((data: any) => {
          data.type = 'customerSale';
          data.key = data.firstName + ' ' + data.lastName;
          data.value = data.firstName + ' ' + data.lastName;
          return data;
        }),
      'lov-contacts': ContactsFakeDb.contacts
        .map((data: any) => {
          data.key = data.contactName;
          data.value = data.contactName;
          return data;
        }),
      'lov-customers': CustomersFakeDb.customers
        .map((data: any) => {
          data.key = data.customerName;
          data.value = data.customerName;
          return data;
        }),
      'lov-relateTo': ContactsFakeDb.contacts
        .map((data: any) => {
          data.key = data.id;
          data.value = data.contactName;
          return data;
        }),
      'lov-deals': DealsFakeDb.deals
        .map((data: any) => {
          data.key = data.id;
          data.value = data.dealsName;
          return data;
        }),
    };
  }

  genId(dbName: string): number {
    let id: number;
    switch (dbName) {
      case 'users':
        id = UsersFakeDb.users.length > 0 ? Math.max(...UsersFakeDb.users.map(data => data.id)) + 1 : 11;
        break;


      case 'activities':
        id = ActivitiesFakeDb.activities.length > 0 ? Math.max(...ActivitiesFakeDb.activities.map(data => data.id)) + 1 : 11;
        break;

      case 'contacts':
        id = ContactsFakeDb.contacts.length > 0 ? Math.max(...ContactsFakeDb.contacts.map(data => data.id)) + 1 : 11;
        break;

      case 'contactactivities':
        id = ContactActivitiesFackDb.contactActivities.length > 0 ? Math.max(...ContactActivitiesFackDb.contactActivities.map(data => data.id)) + 1 : 11;
        break;

      case 'contactnotes':
        id = ContactNotesFackDb.contactnotes.length > 0 ? Math.max(...ContactNotesFackDb.contactnotes.map(data => data.id)) + 1 : 11;
        break;

      case 'contactdeals':
        id = ContactDealsFackDb.contactdeals.length > 0 ? Math.max(...ContactDealsFackDb.contactdeals.map(data => data.id)) + 1 : 11;
      //customer
      case 'customers':
        id = CustomersFakeDb.customers.length > 0 ? Math.max(...CustomersFakeDb.customers.map(data => data.id)) + 1 : 11;
        break;
      case 'notes':
        id = NotesFakeDb.notes.length > 0 ? Math.max(...NotesFakeDb.notes.map(data => data.id)) + 1 : 11;
        break;

      case 'deals':
        id = DealsFakeDb.deals.length > 0 ? Math.max(...DealsFakeDb.deals.map(data => data.id)) + 1 : 11;
        break;

      case 'fm-mk-06':
        id = FmMk06FakeDb.sampleorders.length > 0 ? Math.max(...FmMk06FakeDb.sampleorders.map(data => data.id)) + 1 : 11;
        break;
      case 'fm-mk-13':
        id = FmMk13FakeDb.sampleslips.length > 0 ? Math.max(...FmMk13FakeDb.sampleslips.map(data => data.id)) + 1 : 11;
        break;
      case 'fm-mk-11':
        id = FmMk11FakeDb.quotations.length > 0 ? Math.max(...FmMk11FakeDb.quotations.map(data => data.id)) + 1 : 11;
        break;
      case 'po':
        id = POFakeDb.salesorders.length > 0 ? Math.max(...POFakeDb.salesorders.map(data => data.id)) + 1 : 11;
        break;

      // Companies
      default:
        id = CompaniesFakeDb.companies.length > 0 ? Math.max(...CompaniesFakeDb.companies.map(data => data.id)) + 1 : 11;
        break;
    }

    return id;
  }
}
