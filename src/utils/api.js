import axios from 'axios'
import apiUrl from '../constants/apiUrl'

const getCsrfToken = () => {
  if (!(axios.defaults.headers.common['X-CSRF-Token'])) {
    return (
      document.getElementsByName('csrf-token')[0].getAttribute('content')
    )
  } else {
    return (
      axios.defaults.headers.common['X-CSRF-Token']
    )
  }
};

const setAxiosDefaults = () => {
  axios.defaults.baseURL = apiUrl
  axios.defaults.headers.common['X-CSRF-Token'] = getCsrfToken();
  axios.defaults.headers.common['Accept'] = 'application/json';
};

setAxiosDefaults();

const updateCsrfToken = (csrf_token) => {
  axios.defaults.headers.common['X-CSRF-Token'] = csrf_token;
};

const getCsrfTokenFromResponse = (response) => {
  return response.data.csrf_token
}

const user = {
  login: async (email, password) => {
    const response = await axios.post('/users/sign_in', {
      user: {
        email,
        password
      }
    })
    updateCsrfToken(getCsrfTokenFromResponse(response))
    return response;
  },
  logout: async () => {
    const response = await axios.delete('/users/sign_out')
    updateCsrfToken(getCsrfTokenFromResponse(response))
    return response;
  },
  register: async (email, password, password_confirmation) => {
    const response = await axios.post('/users', {
      user: {
        email,
        password,
        password_confirmation
      }
    })
    updateCsrfToken(getCsrfTokenFromResponse(response))
    return response
  }
}

const post = {
  post: async (title) => {
    const formData = new FormData()
    formData.append('post[photo]', document.getElementsByName('photo')[0].files[0])
    formData.append('post[title]', title)

    const response = await axios.post('/posts', formData)
    updateCsrfToken(getCsrfTokenFromResponse(response))

    return response
  },
  get: async (id) => {
    const response = await axios.get('/posts/' + id)
    updateCsrfToken(getCsrfTokenFromResponse(response))

    return response
  }
}

export default {
  user,
  post
}