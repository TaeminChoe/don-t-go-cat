import { useEffect, useRef, useState } from "react";
import ProductListItem from "./ProductListItem";
import { useInView } from "react-intersection-observer";

const ProductList = ({ products }) => {
  const target = useRef(null);
  const [preId, setPreId] = useState(20);
  const [viewProducts, setViewProducts] = useState([
    {
      id: 1,
      title: "In Harm's Way",
      date: "2023-09-29",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAGdSURBVDjLpVMxa8JAFL6rAQUHXQoZpLU/oUOnDtKtW/MDBFHHThUKTgrqICgOEtd2EVxb2qFkKTgVChbSCnZTiVBEMBRLiEmafleCDaWxDX3w8e7dve+7l3cv1LZt8h/jvA56vV7DNM20YRgE/jyRSOR+ytvwEgAxvVwui/BF+LTvCtjNwKvj/X8CbgXPOHMEZl559HsTu93uPQi7jBiNRgMEx8PR0GIxRB+y2eze2gqQeAXoSCaqqu5bpsWIdyzGvvRrBW7rdDo2I6ZSKeq7B8x0XV/bwJWAJEnHSMwBDUEQWq5GfsJthUJhlVuv11uckyiGgiH2RWK73RYRb2cymbG7gnK5vIX9USwWI1yAI/KjLGK7teEI8HN1TizrnZWdRxxsNps8vI3YLpVKbB2EWB6XkMHzgAlvriYRSW+app1Mpy/jSCRSRSyDUON5nuJGytaAHI/vVPv9p/FischivL96gEP2bGxorhVFqYXDYQFCScwBYa9EKU1OlAkB+QLEU2AGaJ7PWKlUDiF2BBw4P9Mt/KUoije+5uAv9gGcjD6Kg4wu3AAAAABJRU5ErkJggg==",
    },
    {
      id: 2,
      title: "Young Lions, The",
      date: "2024-01-06",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALFSURBVDjLjZPfS1phGMeFXdef0bVXMeiiQS0hNeeCuuhKUFzKEnU/lDEKxZazaEop20Ub1QpaRhdrjFVgGY4RyEYuj80y7SfMNH9l/vzufV9mrO1mBx7Oc77n+X7e533OeXkAeH+Gz+dr8ng8Y8vLy/6lpaWfi4uLybm5udD09LTr7ZTr1t/1V8nm5mYdMTuJuRiLxZBIJJBOp5HL5ZBKpRAMbsM1bim9dJqnxhxD9dcAv80fd3d3Ua1Wkc/nQSHRaBTxeBzlchnV8gVKFyF4VmZgsz72Dj17Wn8FoCtTc7FYBL1KpRLoczgcxvn5OYMWLo5xmd1G5fIHPn14A1P//SkGIOabpO1KNptlhkwmwyBHR0fgOA5UL5dLyKU4FLJB1kWRhE57r/JAr27iEbPz4OAANEKhEDPRPVPQyckJywuXKQIIEGOM5GekwwK8Xi+USqWTx+fz8b9BZ0PByWQSe3t7kMlkXxkgEAhgZ2cHGxsbmJycZMX0fnh4yPSaRgcbiUSwv7+P09NT9PT0xBmAFtVMFEKDajW9dvd9j+BLIMyCix5D2tl19g9gYmICs7OzsNlsLNfr9VhfX0djYyMsQ1amWZ/bMP56BoKOTu7aFtbW1tDc3Ay73c5apJ+SahaLBb29veDIkKlGO6Q1QpH42z9D1Gg08G9tQSwWQygUQqFQwOFwwGg0slxEdGO/mUF0Ol2G/UikwElXGrSa2WoU4Oc+o63tNlZXV+H3+9k23G43BAIBLPZXDGAymfIMMDw8XGceNK08eqJHn6aPAR4a9GhtbSWQNkilUhY0b2lpgUQiiVMA+Q+SV4dpYGCgTqGUv5PelVZHX4xi3j2PhYUFuFwuaLVaGAwGllONnM7EyMhIkmwzeO1oNjQ03Oju7pKJRKK0XC6vqNSqqkqlIp/rzqFE2vFerVbnSOTJu2x7e3uEDJz/C4Myz4QSsAdYAAAAAElFTkSuQmCC",
    },
    {
      id: 3,
      title: "Third Person",
      date: "2023-03-21",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHdSURBVDjLpZNraxpBFIb3a0ggISmmNISWXmOboKihxpgUNGWNSpvaS6RpKL3Ry//Mh1wgf6PElaCyzq67O09nVjdVlJbSDy8Lw77PmfecMwZg/I/GDw3DCo8HCkZl/RlgGA0e3Yfv7+DbAfLrW+SXOvLTG+SHV/gPbuMZRnsyIDL/OASziMxkkKkUQTJJsLaGn8/iHz6nd+8mQv87Ahg2H9Th/BxZqxEkEgSrq/iVCvLsDK9awtvfxb2zjD2ARID+lVVlbabTgWYTv1rFL5fBUtHbbeTJCb3EQ3ovCnRC6xAgzJtOE+ztheYIEkqbFaS3vY2zuIj77AmtYYDusPy8/zuvunJkDKXM7tYWTiyGWFjAqeQnAD6+7ueNx/FLpRGAru7mcoj5ebqzszil7DggeF/DX1nBN82rzPqrzbRayIsLhJqMPT2N83Sdy2GApwFqRN7jFPL0tF+10cDd3MTZ2AjNUkGCoyO6y9cRxfQowFUbpufr1ct4ZoHg+Dg067zduTmEbq4yi/UkYidDe+kaTcP4ObJIajksPd/eyx3c+N2rvPbMDPbUFPZSLKzcGjKPrbJaDsu+dQO3msfZzeGY2TCvKGYQhdSYeeJjUt21dIcjXQ7U7Kv599f4j/oF55W4g/2e3b8AAAAASUVORK5CYII=",
    },
    {
      id: 4,
      title: "Avengers, The",
      date: "2023-03-08",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACxSURBVDjL7dItC8JQAIXh491HWbDvD1pEDIIKm1zDxqKi0WIULAZFYc1msF3ErEZlMC9Mhxx/gTAR28KpDxx4QRK/DCXwAbDg0oLMTShtQF0F5AlwvwHkqy+Zxxs+lwsmvs8DKrIw8DCh8njNLOxRtxrU4yF3MFRhIBFQ2XxG3W7yXq8xjULGsIsDFwF58zzq0YBpFPDc6XIKp/iFI4S7h5BbWGoFW03gyABVtyzxT8Ab8Xzei+tkcykAAAAASUVORK5CYII=",
    },
    {
      id: 5,
      title: "Messenger: The Story of Joan of Arc, The",
      date: "2023-11-07",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIMSURBVBgZpcHNi05xGMfhz/07hzTDiKZmEmLYeM3iKTKUiFhY2EhZ2NjIBgsWYoUoSWr+B7NhY6GkJBRhYSMvJYRSFDPPi3N+9/01Z2Jvcl0mif9h+46PH92yrXXpe0f9EhCBIvBwFCIUyJ2QkDsewcDsuv3y5adTN67sHytbo61rs+b0p6E5zER/u+PXgLGyUyt1vk8yU91aiSmlXJw/uJKZOnzxPY1SChpVdgQohAcEIkJ4BJ6FZ+EKKhfLh+fh4TRKJBqWDJNQMmTCwkjJMEuYOVaIIhJlFo3ITiN5OI0EmBmWjCIZqTAsQZFgVlFw/tZuTt/cjIqaRnjQSAoxzYxGApIZKRlFYRQGKcGvXLF4cBXHxjdS5R4RTqOMcP4yM6ZJnLy+DSlTRabKmUULVrJqeCMTvTZ7x0ZYoKs0ylzXTDPDAEmYGTkqdq45hCvwcALx+cdH1i0eZbLq8qx7iPXnDswv5UGjAMQUM5Do5QpX8P7bG+rI5Kipvebnrwk2LNnKZN3h8bsH38qI4C8DjClm9HKP7JmhgaXkcFzBlx8fWDh3mOcfH/L47Qs6Tsv2HR8fH1qyaH+4Ex64OxHBz8Ej9KqKKip6uWLF4Go2jezi6YdH3H/1hGXdE7fvXD6zxyTxL9aeS+3W0u19917f/VQFOz5f0CummCT+xchZa3sUfd3wka8X9I4/fgON+TR7PCxMcAAAAABJRU5ErkJggg==",
    },
    {
      id: 6,
      title: "Best Boy",
      date: "2023-09-08",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJKSURBVDjLdZJNSFRRFIC/82YazQJpkVgbQV9aU23cuQtatIxaREi4C9zmQvrBpEUGLtvnQkqIVi0jgmzjT5PWZJYwIiEG2iInnR/ffeeeFuNMjtaFwz1wz/fde+69Ymb03Z1Ine88uZxMSuP84lo4PtKb5x/j0rX7zafPtee2torlxWymY/rVWCRmBlAneZ/9Hk6M9tVJLl693dx5tiNXKBbLix9nOzJvnkUANQHAjTtPU+n248uYNc7MLIYvnwzkAS5cvtUcnjmVKxZK5a+fZzvm3z6PqkydAODKzceprs4TOfXx4Q/Tc2EUFelMd+UK26XSty+Z8NO7F9HeejEzBgcHHwD3qjIzo6WlJQGgqnjvWV9fVzPDzFBVCoXCw/Hx8eHkLjAUXn8k+y/NDNTAe8OXNLH221FSMODXWO8QMBwANDU1ScsRIZCDcKzGj7xjNe+IvZAQCADnnEAlx8xoTELrUSEZ/IXLkbK6GbEVeRIiJIIKEIigqtQEzjmcVsBjjYJIBf65HWOeXVgIEAIRAqMmSAJEUUTkgd2dU2LkywoIIkYAeKOSG3jZJ1BVnFaK1Hu2nKcpFeDUCAJQBcQQE6qPXieI45gdNcxDKTbUV/o8lDBiJ3VwNbz39S0UdgznoeSMWEHNUBNMKmf2tgfG6gUNDQ1svh5lZWWFkaUlBtracM6RTqdZmJuju7ubqakpenp6mJycJAzDWgtiZvT391trayuq+t/w3tdm7z3ZbJZMJiNJgI2NDRYWFmqL3nvM7EBe/crVvwPwB5ahnKoTKjg4AAAAAElFTkSuQmCC",
    },
    {
      id: 7,
      title: "Naked Harbour (Vuosaari)",
      date: "2023-10-13",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAACwSURBVDjLY/j//z8DJZhh1ADsBuRPiazJmxLxKa3P/39ki8Mnzwq9GqINyOgPbGhcnfh/y5Wp/y882/W/f3fW//B+3f/m2ZI9RBkQ2+7yfePlCf83Xpv0HwR69qT+79+TDjLgO1EG+FQb/t92Zc5/ZLDp0lSQAf+JMsAyR/p7966k/+27EsCa23cmkOYCoMKW4B6N/727UsA2g2gQn+gwgBrSAcSfQM6G0h2jSRk3BgASP+M7I0sypgAAAABJRU5ErkJggg==",
    },
    {
      id: 8,
      title: "River Wild, The",
      date: "2023-08-25",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ8SURBVBgZBcHda5V1AADg5/d73/d42g66bF8ZTgbbxcpoKaNJXWQ3fUJJdRF5JxRF5EGEboIZ/QPiTeFNGF03GFiRUSZiUGxlSlnqtsZya6ustY9z3vPx9jyhfkRXacCEVBVARARABAA0ccvJfME7aWnAhOGDVX37STJiSgjEQIjEQAxICAgoWtz6rlr6ZEoqVdW3n3pC/xgJVn7izxliJImIJAiRoqDSTe8+eqeqKUgyYpkHDwEO0djg+jlunKW1jkBRIHB7mfJdtInaCCmbS1yZZPYiG6tkndz7HE+eYtc4INBoUGvQzMlJRcTA5hJXPyIG0kj3KKOH2THAQ0eZOc2Nc9Sb5HUaLWpEERH9Y7zwIY+9y9CzrM3y5VssXAD2vULfKPU6tSaNJjlRGxICsk56RnjgZZ44Rdcg0+8zfx44cJRiG7UGjRY1ooiAvy/z6ZtMn2ZjlayDR96mcg8XTrK+TKnC3meoNWm0yUlFxEgR2Vph4SuWvuX+w+x5lAPH+fgNi++9ZvHarzZ+uy4rp3avtw3mpNoQSArGj5NVWPiamQ/oHqHSZ3EluL2ybPT5I7YN3mfrx8/9fPEL6WYUQSzo2cuuMXpG2P0wa/9wZRLMTX9j6OCLyjfPC2de0jE7ac/ATvONIAUCWys0Nsk6WL1Jvc7vv4B89Q/l/kGeOgYgPXG3vB2kchRNtPjsGNkOFi5TbzL7PWdelXWWbf5wVufU6+pbyzbx31oiTUhODOvSf8e4O4cpVYgF23vZ0UdXHzEKMTN/7aqYRY1kw79/FeaWEt3t9qVQf1xXqd+EflVtNFFDjhw1NFm03dz6hrwVZElhZywuDa20n/4fCNbrcsCV4KMAAAAASUVORK5CYII=",
    },
    {
      id: 9,
      title: "Suicide Club (Jisatsu saakuru)",
      date: "2023-10-15",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANRSURBVDjLXZNPTFt1AMc/77WltH0F5I9U1sqgc0qFxYNGlODiEj1sh0kC0WkUD2qiNxM9mCVc3IhGd0E9mOjiZdFkzJg5iI5ljARoNPvDwsZgDLvRCaxA4bV97/X9/Xkxhvi5f7/J55t8JSEE2qgkAwNAD2AC3ZGDwmQH2qjUCJwHysBbkYNiAUDa+pkAcDyQeOP1ipZ3dhmZ73Pzq+ri6fAZB+j4Nz/bq78qpxKxlD9YJ5nzx+4AvTU9Iis9+JGjla1vflDZ/FpTITO8fS+74L/QdFZRgi6hgAeAYctYhsaBtV59d9thfG5B02+dyAKdsmUiS5XNlVuLw9uLSwvKdOInpSVqUWsYmH/l0RbzKAWNWLSCq40nwquZ6UpfXWetCLUplkmrtPQt3bYU/m5T3hOfSv4SToT9BHWXfXtqqamSEUjkVZc/59exQz4i+TM8oQ2bgdLcXFAUjkhCCD4+ee4LX83uj5KNCjWmoO9AC1uqyoZmkGiKAeAIODW6hKcI1nKrbGj+wW/efu6oDLDqND3jCfCKFu1769AdQSAQYOz33yioKrZpcn5snNTeetScgSE/hGoFuwD8AKahdTiWhGp61NWFMF1BJBzm/vIyYxcnmL0+g/HYBYyVEooxBDURTEPrAJABLEND020My8N0wfYgpxaJKAqz12c49EoPlnCI17exIr9LSdewDI2dBbOFoo7k98is6biSzJcjh8g1nkZN/soP1/qpV+K0xZ4lUfc4d4t9mOX1uZ0Klwqyf39eCZK+9oBUshrHs3jpyX5c4eF6Lh6CFTVLR7yLkmVwpfxe175j/dV+AKusnbPKWt8t15eS4w4nhwVlx8IVHvc2F7E9B8ezsV2bglnkqUQ3JVuX/shMbsoAk0PvX7bL+lAysq3PZja5uZyl7JRxXIfGqkeJVTXzSHUrAV+IhugurmanmFqaXNctnpaEEACk0+kXo9HoxdzGljswfNv3cPsgZcvC8izKjkWyPkVn68tcXp5m4s54Xrfs7pVBMecHGBkZaQDONjQ0oJVUtbR192t14sj+nWe6kvrseUkOBW7cv8En7V9Vx0Jx878R8/m8AfydTqdbgBdmTn16k//ROnBcG799KfBhy+fFCiNczBt5DeAfIAavfKIsB2UAAAAASUVORK5CYII=",
    },
    {
      id: 10,
      title: "Flannel Pajamas",
      date: "2023-10-12",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAL0SURBVDjLhZNbSNNhGMb/EqGGUEEUUhgWUkmWQpFZ1oUkdZNQhFAeMkktQY288EgeKk+l05zHdI41tZNO5mHTEJ3OmTrPh8imTvM0tTxs6qbb07c/OTSjLp7v4uV9frzw8aMGWI9MSAJI+CQyEiWJtiv7AZoZbqh9fl3LD7+sLA46Lcv3seQz3fcFpLiamQCg9KHIcuNIVRwmmphQdORhtoeNma4CTLXkYlyUgdHqFMjK4tDLCUUjwwslIZdAAI0GQD8nrGsDMC3NJXmNSUk2vtczMSJIhoyXgIGiaHTkPobohTsNYLibdxkA4m65tVRch29VOegrjEQL0xu1cS4gZ4OcDZbvUWR5WyDH/ySKYm8iJz0e6dwqawNA/9QOagTSMTVml9awotFhdU2HOdU6+iZW0CZfxvCsGrIZNcrbZ5BeOSzYKBsA+gj7l0uF/SrdCFlWrmoxMb+GgclVDJGi+OsiMoWjulcVwyWby1sA+vA6FuzLOuZln2VLGP2hocuVnXPIEMoH0yqG7P8sbwNspLBJ0dAuV6JteAlMgVykn/lzzqnus+zgmWdj+l9AcdO0pHNMCSkBpJUPNehn3iw7VTT/NlyzjsOFedj0r4BC8bQDr1Uh7x5dQiDXEQFvzsOPfQZeebaIKL2Fd62pCH7vgispB7SOSXvNtgA4DVO8D83TuiHFCv0T5GTw2jPwUZpOF4tbGWB8CgZbkgg/rjPOxhlrbWKNdtPlAtGksKZnDuPzGqjUWmjWdSAn0+Xk6kAkCPzxrNIHUXwvxFT4IksUC7eCi7B6Qq1TRTU91tyGCdT1/4RicY0ua3XAndwTeNvCALf5JdhNicgXxxPIQ2SKYuDDvQrLSEpxMJSypV3oFWahUSKG5MssxmaWsaDS4EbmEVxLPQSnlP24kLQHHiwHZNRH4R7HGcfCjNTmoZT1Npn+5YLd053wZDvhVLgxQjx2STfbaNCZKCwjCit/K0y7QBTWEoWVVhGUziJ8B4LumkZv1vkXO/PSRSy+XJ4AAAAASUVORK5CYII=",
    },
    {
      id: 11,
      title: "The Horseplayer",
      date: "2023-09-06",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALZSURBVBgZBcFLaJxVHMbh3znfmVsmmaRJehlQUqE1EQu1xKAuxForgmahFhXsxoXgokZwISKIIEJ3guii3bkQstCFuHAhrWBttRZsiaIlaFNtICbmOqbNfDPznfN/fR4nCYAn3/v+lVqjctI7JoEq4ABwgBzIiGYLrQ1967a33rp4ZroH4CQB8PTpHy5+NjN5n/duSJAhAACQAMTanYLZn1usLHbb13+bH750ZrobAAB85sbLIRv6fZXMOwcOZJBkxCjyInH04AAP3Ru4Ymt9somtx17/elcAADg0utDoLZzNxoqIkrBkKCUsFkSrszhyGqjRbJSZnmpyrrxSu7lc/zQAbMwdyyb3TIVKfS99pd2oiKiIpF5OvjXP8uCLWGU3y5s5Y/0ZlVJg/yMjXPjp7xc8gJLd/fDotaxUG8N2ruN8HUuRTusP1hsv0x1+hnIWuLHhuLIY+e7PNpVShgs+hvWrR8tK9urgyDiQYfkKhC5bi+fo7JvB9jxPKIQyD2Xw5jDLEB6cJ1hKRxTttcrAQRRzyJpQFJgFXHuR8l8fUSpyCgZo730WV24iLwyQICjaJ9WRB0fzjXksGuW+A2CB4ebj5Bu/kIoe2//MoYkPCNVdCIdwJINk4C2mz3eWLn/4xdVG7PoDrN/4htjdoei06LXX+c/dQ3z0PIy9hMvqBO/IvKNacqQonCQAnnj/x3x2ZqLavnCcav9+brdWKcbeQHedwATJwIBkQg4ONz3H373UCQAAFkU+9yalyjCXN5t8WT9LvjYI/0bkBIAEBgDM7itRdI0AAHB/fc6n7Vt8VXuHoQee4pggCZIDEwiQQIJfVyMyUXQiAQBg7c6g+cMfa/7WIaelhDkhHAAmcAgTyDu8OUJwFpPFAACwsNlc7h8ZH3270atL8ggMABisBQAkqJUczmGlzN1O0ZacJACmTp0/FQs955w7ItQHAIBAgBAACICOmV3zMPs/Y958nDUklyMAAAAASUVORK5CYII=",
    },
    {
      id: 12,
      title: "Sound and Fury",
      date: "2023-07-26",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAADCSURBVCjPvdCxDYMwEAXQkyhoEBGKIipcRHTuXFk0riwhGgoke4JMwARMkA2Y4G+QCdggE9waxAKHkhJd+Z++z0crnQ9dAtzk4DD4lTpvYaAnJeVcQ7RHg+MBuzdQrCq51JP4PLioIhi4j0DjydLXISibG2dNBD13ix3NqEe1SN5pgeyb5hF0bGODRL2B4p0hlccOlk0EYTXe4tdKSU7/HQzrCATuXDShHAlooXYDZtJQkOGbwpcIb89bDJqvO/X5/ABgCuuOdgJr8AAAAABJRU5ErkJggg==",
    },
    {
      id: 13,
      title: "White Chicks",
      date: "2023-03-28",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAF5SURBVDjLpZMxa5RBEIafvdu7RPCMhYLBxCoiaqO/IHZWNvkBooh1WrHUwk4s0sTGQrsQwf9gK1gpQoJoY++d5Ludd2YtvlwuaWLODAyzsPu88zLMplorp4n85t3W5vLS4sPc6/VqgMKxIiRRJEoRxYzx2NpajFKMvaaxH993X+flpcXHl169SAv3P/Gge42Nm2//2TUlOH/ubO/p85eXc879dHF1lfmrXe50bgNwfeXKsQJfd37S7XZw95TNxa+7a8Aa94BxKXz+sgOA5JgJuWNyJEfe1m+7gUvkGsGtGyv/NcDt9x8uZCkA2GvGM8Fn5ueIGmR3B2Cu3z/yoNbaJpWI9uwR1NreAXgEuZhmAicJEO5kk2YGD5qFTx1EjRODk4gIsu0LuMeJwSMCxexgIIfhduPSsQI1gjwajYZN0wx+D/8QEfsC00kfdjMxVKn0cwcPV1p/8mx9MFh4BJ1BcU23T0JmyA1JuBlyx2WEO2Y2jPCP6bTf+S96U2WlbWXHPgAAAABJRU5ErkJggg==",
    },
    {
      id: 14,
      title: "Where the Money Is",
      date: "2023-07-04",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKrSURBVDjLpVNNSFRRGD33zZs3P85vOs3kOEUK4qqQCqzcDE0F2eBQgbQIhMAWGWREQdAyaF2LFkaLJCLbBBVoCga5KNEwChK00kYdHWfGnzfjzPu93ffGooTceOG89937vnPued93L6GUYjuDwzYHf7v7w5Dd6W7MiEpFvqRyOjOkg0Jjgc7caQy6Xp5vgIJoirK+mklOTE3xAb83cqm13iMplNhtln/UyeaYlN9FSbUUJa36/F2pxKXX1FpZ1cmToRSSGRkFiWImqyOZ0zG7oiO1qiMtUmQKFIoGzGZl3HuVwnJB4tyBSB1XkDRis3II7/LgzVgaK3kFQQ+BlZkRLAQCbwDwOQiyazJ6hxfh2+FBpc9meuLWS6ppsTbkQk3Qg77RNJZFBVUuziQKTMhrJ8iJBjmNqkoPasMukI3mcYWSVq4mS6ytdiHgd+LZ26RJMIhuhiyLHw8k4fU6zRwH/1cXCsWyA8Kqoyoq7LyO3WEfXo+kcbyxylzv/5hBhK0VM5PofngfLpcLPaoKPhwDvy5pMNzIsorFnIhI0A1BsCKVs+PdxJp5UOojfmhiEv3Dz9F46AiaWi6iIQjcuH7NEFAp6y1JZxk54IbDboWhuHenE7sZjLYlv33Fy95u7D/YjH3Np3Hz8gW0xk9iITXHfiE3Ny3J6p6GGgdxOThCOM3c1bBO2OPzp3G8eNqDpqbDSJxN4NyZBBKnWujo+2FSqkv85OX80syxq31+m7uigrdZCM+qybH2WZhKiM5w5McA9yUNOhUKa3eORi3NsTjGRkfItP9Ecml64TuMy/Q/dHR0UEEQHsTj8bzf7xe7uroetbe301gsZv2dQ7a6jYw8Jsvygc7OzhDLuyKK4q35+Xnn4OBg8U/SVg42xMedTudkW1sbjUajls3ffwGqPWPVeFFgygAAAABJRU5ErkJggg==",
    },
    {
      id: 15,
      title: "China Blue",
      date: "2023-08-03",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKhSURBVDjLpZNZSJRRFMd/937fN58zqWPpjBWamYmtlG0YLW+RVEQPLQ9JVNBCENR7UEhFJPUSZZAR0UsLCEE9VGQLLVCG5kJm2CZajjg2rjPfzHdvD4NTRj31h/NwDvf++Z17zxFaa/5HJkDFkVtn3ITYHh5x04ZifzmlxqdeGzK9XKmt2nbYBHCVqDi+b3EgGAgIIUw0oFP3BFqD1mO5xk047K68txNIGoSHXDuQExAHzl5jan4WtqFwtQ3SjxQkQwoMKfja1syJw/uJu0KkWhiJgZQmxUXTmVe2EkMaaO2CMEEIpBAIIZFSYhkSpf54g7E2bTuNNG96kvcvyuivY5NzmcGnL6la+MTfdOHYjnEGcSdKPDoKQqC1QmkXpSQCyB68S3GkAe/8CvyFpfz4VELb/ZrTKQOtoTfSTV8oQlwlUNplINaD4+ZRqB4xL6+DzOIVhDve4REOGZmTSc+e5h9n8L3Hh9UZ/VXQAQrMZ6yb1U7WjLXEvl3H4xN8aWwjMqy1dPoXyDF8rUEaHqRhJ8NMo8DTSEXJW7KK1hHtvoSw+rHSM/CqPi5+WDK89GBtu/yd4HcFBx6wJf8V/pkbiXZVI604zsB0OuveYJQdpcvJcQEkgFYKAYQ+t9LZ+hLZWk355BaCc9fjfK/B8GhiAwV0Pa7nWHMpMrsk9ZVmctaSE3b+5BF6Gm4S0IoEeXxrPsfEoIdoOJ++122I8stUbp4COClSCZDplRGViDLF5xBqqmHOyr3Ync9ov/2cxnth3j9sxL/mBLnBbHJ9cSzpYFtCpwgm2PLGnpMPl4/E9fxV0ZDfab1D4YJVRHr76Kh/r+/4Dg33VLW40AKAbYHX5CqA+HOdt66eNLpoRq65bHYh2oq9GA317tpwqunjv9b5J0pAFDVe4XHbAAAAAElFTkSuQmCC",
    },
    {
      id: 16,
      title: "Final Season, The",
      date: "2023-03-30",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAI6SURBVDjLpVNNaFNBEP5e8hJiSjVVTComsdYUMbRVUhSVgFawgqgo6FFBaMEeehQ8WAQFj57FCh4KVixCERXipQhCa6kaEz00uSQIghibNn++t7tv4+6mTU2bi3Rh+WZn95v5ZndWq1ar2MzQ1zuGHs85xwaPEIF9qz5uWbBW5vjIiY/Sd+n+qz5GKbT1CgRxnwCPmPPBHW5wLolcBTEJxfT7+RtccI5Fwg9RtdYU3Jwddgp4DVwfrXJrBpoNt87trwfmnCP2KYvU9z13ZObTB/04e7izoYRvFrP8qwspV45kMqlsxhj6u7uxd7u+q7V1KwK+NsTj8VoJIvsXn7O9Vx7K5rMgJkVpqQzTICjmSwrl+unQJDKZDMLhMLxerwqqC/IHr8PX29HSCcYZ/C1BhRVigHKKP1SgxTAx8QwyWaFQgGmaSl0qlYIuZFOmMRCLKCITh6lA0zIFkcJkZs1HmCL9e+mhUAj6g+ij6HDs2udypXLIZd+C7M8sfuVzDdJlSYyyBrK00+n02jNefX55gRgkyAo9I05ycmx5aRlTty/AMAxVKyEEuVwOiUQCkUgEgUBA+eqvIMg9IuNLe/H4V2arEeRwuVz1jG63Gx6PR01d1+FwODY20vm7U0ftNm1m8fciKCWidrqCNfti9IAKNv5mVvjpxlbWgB9yo2P3zqa9/+LdnLqPMwP9zf+ClC4zZgrFpgrafV7VWLG300qB9j+/sevKvSflcumUbOVtnraF9OTogLbZ7/wXRdt3lZxkvhIAAAAASUVORK5CYII=",
    },
    {
      id: 17,
      title: "At Five in the Afternoon (Panj é asr)",
      date: "2023-10-22",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAL5SURBVDjLjZNbSJNhGMd3KdRlN90E1Z0URVfShYKKic7ChFRKyHRNp3lAgq1ppeam5nFuno+JJ8ylzNMSRec3LdFNm7rKPuemznm2nMfl/n3fBw6tiC5+Lw8Pz//H8148LH1VvBNFDIWCgqSwUhxNlETiQ94D9IluHymEbtbGuGtk5eOLClnIuZjcwLNOAFg0LGqYmOsSwzwkw4q2Amu6GqxOVMMyUoZFVSFM73NBtokxWSsAkRcKOd8VlIBwCKZrn00cC5bHyijKsTRcgoUBGea6c0C2ZkDfkAxtWQJUWSGMIC/k/IRDoP5kdB5T9+NbVymm6pMwIgtDn/gOqLVBrY0q7mUUh11AadQVNKQGoFSaDmldl7NDQD99M4fdY/MHWNu2Ye/Qjn2bHes7PzFl3sOocReGtQOQqwdo16xC2mnoPg47BDTK6d13yukd+xw1bN0/gnnLBv3SPmapoPrrDxQpTfaCDoP8ZPiUgKZV+92lTbtFfiS3Ydo4ZMKd4+soVBpnJB2zLr+H/xAcUz+0MqgxWjFq2Ias26j628w/BY1Dy8Pj81aMUQJJ++zgfwvq1cs3mwmT6U1zO7KyslFZWYnUtAwkl/ctCKUK38TERJLupaWlbfB4vKeurq5nHOHaQUtrE7Foz5WWIj8/HxaLBSRJYmBgAOmvc5H4Kg/6z1+O6B5BEMwMm83OZMLVqiVlj24d8s5eCIVCaHQ6iMXp8PPzA4fDgUQigUAgYGpfNtseFBTUSUsSEhK2WA09Oue6QTP6pzchysyBSCRiBDu7e7jl7Y3e3l5oNBqoVCq0tLTA3dMLvCTZDVqQkpKyx9zCpLIYxLAa6ZIKxMbGMQK+8Dk8PDzh5eUFf39/Brr2cHfHwwD3TVrA5XI3Tx3TiCIDnNBgFOTnQP62CXK5HEVFRYiPjwefz2dqutdUV2PLzs7epL6oZ508Z21xBNny8t5u8F1fcDmP8CQqEtEUSfev7r8IvGSO5kXYoqJ4h+Hh4VYfHx+Dm5vb9V9HN9N1j9T0nAAAAABJRU5ErkJggg==",
    },
    {
      id: 18,
      title: "Boys, The",
      date: "2023-10-23",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKrSURBVDjLpdPbT9IBAMXx/qR6qNbWUy89WS5rmVtutbZalwcNgyRLLMyuoomaZpRQCt5yNRELL0TkBSXUTBT5hZSXQPwBAvor/fZGazlb6+G8nIfP0znbgG3/kz+Knsbb+xxNV63DLxVLHzqV0vCrfMluzFmw1OW8ePEwf8+WgM1UXDnapVgLePr5Nj9DJBJGFEN8+TzKqL2RzkenV4yl5ws2BXob1WVeZxXhoB+PP0xzt0Bly0fKTePozV5GphYQPA46as+gU5/K+w2w6Ev2Ol/KpNCigM01R2uPgDcQIRSJEYys4JmNoO/y0tbnY9JlxnA9M15bfHZHCnjzVN4x7TLz6fMSJqsPgLAoMvV1niSQBGIbUP3Ki93t57XhItVXjulTQHf9hfk5/xgGyzQTgQjx7xvE4nG0j3UsiiLR1VVaLN3YpkTuNLgZGzRSq8wQUoD16flkOPSF28/cLCYkwqvrrAGXC1UYWtuRX1PR5RhgTJTI1Q4wKwzwWHk4kQI6a04nQ99mUOlczMYkFhPrBMQoN+7eQ35Nhc01SvA7OEMSFzTv8c/0UXc54xfQcj/bNzNmRmNy0zctMpeEQFSio/cdvqUICz9AiEPb+DLK2gE+2MrR5qXPpoAn6mxdr1GBwz1FiclDcAPCEkTXIboByz8guA75eg8WxxDtFZloZIdNKaDu5rnt9UVHE5POep6Zh7llmsQlLBNLSMTiEm5hGXXDJ6qb3zJiLaIiJy1Zpjy587ch1ahOKJ6XHGGiv5KeQSfFun4ulb/josZOYY0di/0tw9YCquX7KZVnFW46Ze2V4wU1ivRYe1UWI1Y1vgkDvo9PGLIoabp7kIrctJXSS8eKtjyTtuDErrK8jIYHuQf8VbK0RJUsLfEg94BfIztkLMvP3v3XN/5rfgIYvAvmgKE6GAAAAABJRU5ErkJggg==",
    },
    {
      id: 19,
      title:
        "Sergeant Körmy and the Underwater Vehicles (Vääpeli Körmy ja vetenalaiset vehkeet)",
      date: "2023-05-08",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJCSURBVBgZBcFBi1VlGADg5/3Od+/cYWjUTYlRS43Zi1BGuGlVizZB0EJaFf2JNpHgPt1kBf2EXFlEZFFCUJsIsWmhI07iqOPM3HvPPed7e57ITAAAcO3mw1wOg2Fo4PbOo6NoGfuL4d7du4tv+r29yz9dfXsemQkAAK78cD8/vHDKw4Mm0DKtxqZ2fP3bE7/f2vn2wb2d9yoAAMA4psdH6c7DVEpaDc3+fPDG6XXnzxy3MS1vXf/u4LMCAACQ6IJZZdqFaRdm0+K/J3NnTnDx3DEb07WPCwAAAEQw6ahB7cKsFtt74eb20tN5mtSi3r5+9o/Z5tZWRAFASp8KoSsFiNRastaJErquk6iR5ZWXzn85iQgSkghu3NdACE0XTGsRmVoLESGTasiF1q8tH1wx9h1lU8Rzfrz1souvv6gWShQt6YLSMGW9kpmqVZRsvbGfypYOt3/29O8/XTrO7hcEEoEOHWZoH/xCC1XkrA1z+9t3rPZ2tNXCibPvq1sf2dzoZBZAyqQU/vn8nOVwIFqJalXU9eedvHAJjUypOXrwlf4ZKWQWhBTq5mtgWja1HPpqlZnjQr97DQloDudFP7BcsRpGi34wX/aOv/BYxbuf/Lp7bGOyXi1ltoFAJhptZXNtxXQpxwXtUBv35fDU7NSb/sWNy6+ehKrPDCOZ5Ej2si1pC5lzOR7J8UAO+3J8hgYAavatDkePtGFCFrKTOaGtybZBrmT2RE8ZjIsFAKi5WP61ffWd0xIBAAAASMT3tLwN8D9pITwp1Smo1gAAAABJRU5ErkJggg==",
    },
    {
      id: 20,
      title: "Bitch Slap",
      date: "2023-07-18",
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHfSURBVDjLY/j//z8DJZhohU926XPeXuX/6tTkgL8nJvj9vzRX//69JaaSRBtwc0XA/xtLs/5/f3jy/4/Hp/+fmur0/1CT4Tpibf//5cry/z8eHv3/8/EZMP5+e+//kxP8/xKl+cfbw/9/PFrx/+66nP9fzi8FY5ABpycHfydK858vm/9/vZnx//P5/P8X5kb+v7u6+P/Jif7/8QYiiuY7Cf+/XHP5/+td3/9nW2L/3+y3/o83FojVjNWA/RPUidaMYcDOTrX/n57tw6p56USv/3lTIj6l9fn/j2xx+ORZoVcDN2BGsoICSPPD0xv+n1iZjqF5Qb/b/8bVif+3XJn6/8KzXf/7d2f9D+/X/W+eLdkDNmByrtz/Tw9P/P/1/OL/rbUm/w/PNPx/50ju//NzvP4fbzb5H9vu8n3j5Qn/N16bBPLC/549qf/796SDDPgON+AnMHW9WZX4/8UMh/+H0kX/r0oQ+7+lTAfsZ59qw//brsz5jww2XZoKMgDi90gnof9X5sT+/3p+2f8351f+P9jtAdcMwpY50t+7dyX9b9+VANbcvjMB1QURDsL/45xE/8/JVAVr3NVtvRY5cIEKW4J7NP737koB2wyiQXx4GBCDgYo7gPgTyNlQugMkDgAAPd9LkvTMtAAAAABJRU5ErkJggg==",
    },
  ]);

  // intersection-observer 라이브러리 사용
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     loadMore();
  //   }
  // }, [inView]);

  // intersection-observer api 사용
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return; // entry가 interscting 중이 아니라면 함수를 실행하지 않음

        // 실행할 함수
        loadMore();
        // 실행 후 타겟 엘리먼트에 대한 관찰 중지
        observer.unobserve(target.current);
      });
    });

    if (!!target.current) observer.observe(target.current);
    // return () => {
    // 모든 관찰 중지
    //   observer.disconnect();
    // };
  }, [viewProducts]);

  // 스크롤 뷰포트에 닿을 때 실행할 함수(다음 리스트 가져오기)
  const loadMore = () => {
    setViewProducts(
      viewProducts.concat(
        products.filter((item) => {
          return item.id > preId && item.id <= preId + 20;
        })
      )
    );

    setPreId(preId + 20);
  };

  return (
    <div style={{ height: "auto", minHeight: "100vh", paddingBottom: "60px" }}>
      {viewProducts.map((item, idx) => {
        return (
          <ProductListItem
            product={item}
            key={idx}
            targetRef={idx === viewProducts.length - 1 ? target : null}
            idx={idx}
            // targetRef={ref}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
