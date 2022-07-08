import nock from 'nock';
import { matches } from 'lodash';
import * as userService from './userService';
import { UserModel } from '../models/UserModel';
import { RegisterUserModel } from '../models/RegisterUserModel';

describe('user service test', () => {
  let user: RegisterUserModel;
  let userCreated: RegisterUserModel;
  let userFound: RegisterUserModel[];

  beforeEach(() => {
    user = {
      id: 59,
      nombre: 'bank',
      fecha_actualizacion: '2022-01-10T08:27:20.158Z',
      fecha_creacion: '2022-01-10T08:27:20.158Z',
    };
    userCreated = {
      id: 62,
      nombre: 'test',
      fecha_creacion: '2022-01-07T20:29:41.458Z',
      fecha_actualizacion: '2022-01-07T20:29:41.458Z',
    };
    userFound = [user];
  });

  // it('should fetch saveUser', async () => {
  //   const userCommand: UserModel = {
  //     nombre: 'test',
  //     clave: '1234',
  //   };
  //   nock('http://localhost/api/usuarios')
  //     .post('/', matches(userCommand))
  //     .reply(201, userCreated);
  //   // const data = await userService.saveUser(userCommand);
  //   // expect(data.id).toEqual(userCreated.id);
  //   // expect(data.nombre).toEqual(userCreated.nombre);
  // });

  // it('should fetch validatePassword', async () => {
  //   const params = {
  //     usuario: {
  //       nombre: 'bank',
  //       clave: '1234',
  //     },
  //   } as const;
  //   nock('http://localhost/api/usuarios')
  //     .get('/validate-clave')
  //     .query(params)
  //     .reply(200);
  //   const data = await userService.validatePassword(params.usuario);
  //   expect(data).toEqual(true);
  // });

  // it('should fetch getUser', async () => {
  //   const params = {
  //     nombre: 'bank',
  //   } as const;
  //   nock('http://localhost/api/usuarios')
  //     .get('/')
  //     .query(params)
  //     .reply(200, userFound);
  //   const data = await userService.getUser(params.nombre);
  //   expect(data).toEqual(userFound);
  // });

  it('', async () => {
    console.log('');
  });
});
