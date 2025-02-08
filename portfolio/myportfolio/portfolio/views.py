from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Contact  # Import your Contact model
from .serializers import ContactSerializer  # Import serializer

@api_view(["POST"])
def contact_form(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save() 
        return Response({"message": "Message received!"}, status=201)
    return Response(serializer.errors, status=400)
