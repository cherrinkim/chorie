using System;

using Xamarin.Forms;

namespace chorie
{
	public class CreatePage : ContentPage
	{
		public CreatePage()
		{

			Label header = new Label
			{
				Text = "Create Page",
				FontSize = Device.GetNamedSize(NamedSize.Large, typeof(Label)),
				HorizontalOptions = LayoutOptions.Center
			};

			Label background = new Label
			{
				Text = "Select Background",
				FontSize = Device.GetNamedSize(NamedSize.Large, typeof(Label)),
				HorizontalOptions = LayoutOptions.Center,
				VerticalOptions = LayoutOptions.Center
			};

			Picker picker = new Picker
			{
				Title = "Background",
				VerticalOptions = LayoutOptions.CenterAndExpand,
				HorizontalOptions = LayoutOptions.Center
			};

			picker.Items.Add("Blank (white)");
			picker.Items.Add("Blank (black)");

			Button goButton = new Button
			{
				Text = "GO",
				Font = Font.SystemFontOfSize(NamedSize.Large),
				BorderWidth = 1,
				HorizontalOptions = LayoutOptions.Center,
				VerticalOptions = LayoutOptions.End
			};

			Content = new StackLayout
			{
				Children = {
					header, 
					background,
					picker,
					goButton
				}
			};
		}
	}
}

